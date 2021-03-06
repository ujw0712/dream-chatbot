import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import NoMatchingRoute from '~/components/common/NoMatchingRoute';

interface RouterLocation {
  pathname: string;
  hash: string;
  search: string;
  state?: Record<string, any>;
}

interface RouterContextType {
  location: RouterLocation;
  params?: {
    [key: string]: string;
  };
  push: (location: Partial<RouterLocation>) => void;
  replace: (location: Partial<RouterLocation>) => void;
  goBack: () => void;
}

export const RouterContext = createContext<RouterContextType>({
  location: {
    pathname: '/somewhere',
    hash: '#howdy',
    search: '?some=search-string',
  },
  push: () => {},
  replace: () => {},
  goBack: () => window.history.back(),
});

const BrowserRouter: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [windowLocation, setWindowLocation] = useState<RouterLocation>({
    hash: window.location.hash,
    pathname: window.location.pathname,
    search: window.location.search,
  });

  const ctx = {
    location: windowLocation,
    push: (newLocation: Partial<RouterLocation>) => {
      const { state, pathname } = newLocation;
      window.history.pushState(state, '', pathname);
      setWindowLocation({ ...windowLocation, ...newLocation });
    },
    replace: (newLocation: Partial<RouterLocation>) => {
      const { state, pathname } = newLocation;
      window.history.replaceState(state, '', pathname);
      setWindowLocation({ ...windowLocation, ...newLocation });
    },
    goBack: () => window.history.back(),
  };

  const handleHashChange = (popEvent: PopStateEvent) => {
    const { pathname, hash, search } = window.location;
    const { state } = popEvent;
    setWindowLocation({ ...windowLocation, pathname, hash, search, state });
  };

  useEffect(() => {
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  });

  return (
    <RouterContext.Provider value={ctx}>{children}</RouterContext.Provider>
  );
};

class Route extends Component<{
  exact?: boolean;
  path: string;
}> {
  render() {
    const { children } = this.props;
    return children;
  }
}

/**
 * URL Parameter??? Path??? ???????????? ??????
 */
function compilePath(path: string) {
  const keys: string[] = [];

  const path2 = path.replace(/:(\w+)/g, (_, key) => {
    keys.push(key);
    return '([^\\/]+)';
  });

  const source = `^(${path2})`;

  const regex = new RegExp(source, 'i');
  return { regex, keys };
}

const Switch: React.FC<{
  children: JSX.Element[];
}> = ({ children }) => {
  const routerCtx = useContext(RouterContext);
  let routerParams = {};
  routerCtx.params = routerParams;

  for (const route of children) {
    const { exact, path } = route.props;
    if (exact && path === routerCtx.location.pathname) return route;
    if (exact && path !== routerCtx.location.pathname) continue;

    const { regex, keys } = compilePath(path);
    const match = routerCtx.location.pathname.match(regex);
    if (match) {
      const params = match.slice(2);

      routerParams = keys.reduce<{ [key: string]: string }>((acc, cur, idx) => {
        acc[cur] = params[idx];
        return acc;
      }, {});
      routerCtx.params = routerParams;
      return route;
    }
  }

  return <NoMatchingRoute />;
};

/**
 * useLocation ?????? ?????? URL??? ???????????? ?????? ????????? ???????????????.
 * URL??? ????????? ????????? ??? ????????? ???????????? useState?????? ???????????? ?????????.
 * @returns {
 *   pathname: '/path/to',
 *   search: '?search=?????????',
 *   hash: '#hashTo',
 * }
 *
 * @example
 * const location = useLocation();
 * console.log(location.search);
 */
const useLocation = () => {
  const routerCtx = useContext(RouterContext);

  return routerCtx.location;
};

/**
 * url?????? ????????? ?????????????????? ???????????????.
 *
 * @example
 * ?????????????????? path??? category, number??? ??????
 * <Route path="/hello/:category/:number">
 *   <BlogPost />
 * </Route>
 *
 * BlogPost ????????? ???????????? ??????
 *
 * function BlogPost() {
 *   let { category, number } = useParams();
 *   return <div>{category}??? {number}?????? ???</div>
 * }
 *
 * @returns {
 *   pattern: 'matched',
 * }
 */
const useParams = () => {
  const routerCtx = useContext(RouterContext);

  return routerCtx.params;
};

/**
 * history ????????? ???????????????
 * @returns {
 *   location: {
 *     pathname: '/path/to',
 *     search: '?search=?????????',
 *     hash: '#hashTo',
 *   },
 *   push: (path, state?) => void,
 * }
 * @example
 * history = useHistory();
 * history.push('/main');
 *
 * @example
 * history = useHistory();
 * history.push('/main', { message: 'hi' })
 * // /main????????? history.location.state??? ????????? message??? ??????
 *
 * @example
 * history = uesHistory();
 * history.pathname;
 */
const useHistory = () => {
  const routerCtx = useContext(RouterContext);

  return {
    location: routerCtx.location,
    goBack: routerCtx.goBack,
    push: (pathname: string, state?: Record<string, unknown>) => {
      routerCtx.push({ pathname, state });
    },
    replace: (pathname: string, state?: Record<string, unknown>) => {
      routerCtx.replace({ pathname, state });
    },
  } as const;
};

const StyledLink = styled.a`
  all: unset;
  cursor: pointer;
`;

const Link: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  const { push } = useHistory();

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    return push(to);
  };

  return (
    <StyledLink href={to} onClick={handleLinkClick}>
      {children}
    </StyledLink>
  );
};

export {
  BrowserRouter,
  Switch,
  Link,
  Route,
  useLocation,
  useHistory,
  useParams,
  RouterLocation,
};
