const REG_ID = /[a-zA-Z0-9]{4,}/;
const REG_PW =
  /^(?=.*[A-Z])(?=.*[a-z])([^\s]){10,}|(?=.*[A-Z])(?=.*[0-9])([^\s]){10,}|(?=.*[A-Z])(?=.*[<>{}|;:.,~!?@#$%^=&*"\\/])([^\s]){10,}|(?=.*[a-z])(?=.*[0-9])([^\s]){10,}|(?=.*[a-z])(?=.*[<>{}|;:.,~!?@#$%^=&*"\\/])([^\s]){10,}|(?=.*[0-9])(?=.*[<>{}|;:.,~!?@#$%^=&*"\\/])([^\s]){10,}$/;
const REG_EMAIL =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const REG_IMAGE = /(jpeg|jpg|png)$/i;
const REG_PH0 = /^010$/;
const REG_PH1 = /^\d{4}$/;
const REG_PH2 = /^\d{4}$/;
const REG_PHONE = /^\d{2,3}-\d{3,4}-\d{4}$/;
const REG_NOT_DIGITS = /[^0-9]/g;

const WARNING_ID = '4자 이상으로 영어, 숫자만 사용';
const WARNING_PW = '10자 이상으로 영어 대소문자, 숫자, 특수문자 중 2개 이상 조합';
const WARNING_PWRE = '패스워드와 동일하지 않음';
const WARNING_EMAIL = '이메일 형식 안맞음';
const WARNING_PHONE = '번호 형식 안맞음';

const idValidator = (idIn: string) => {
  if (!idIn) return ' ';
  if (REG_ID.test(idIn)) return '';

  return WARNING_ID;
};

const pwValidator = (pwIn: string) => {
  if (!pwIn) return ' ';
  if (REG_PW.test(pwIn)) return '';

  return WARNING_PW;
};

const rePwValidator = (rePwIn: string, pwIn: string) => {
  if (!rePwIn) return ' ';
  if (rePwIn === pwIn) return '';
  return WARNING_PWRE;
};

const emailValidator = (emailIn: string) => {
  if (!emailIn) return ' ';
  if (REG_EMAIL.test(emailIn)) return '';

  return WARNING_EMAIL;
};

const phoneValidator = (phoneIn: string) => {
  if (!phoneIn.replace(/-/g, '')) return ' ';
  if (REG_PHONE.test(phoneIn)) return '';

  return WARNING_PHONE;
};

const ph0Validator = (ph0In: string) => {
  if (!ph0In) return ' ';
  if (REG_PH0.test(ph0In)) return '';

  return WARNING_PHONE;
};

const ph1Validator = (ph1In: string) => {
  if (!ph1In) return ' ';
  if (REG_PH1.test(ph1In)) return '';

  return WARNING_PHONE;
};

const ph2Validator = (ph2In: string) => {
  if (!ph2In) return ' ';
  if (REG_PH2.test(ph2In)) return '';

  return WARNING_PHONE;
};

export {
  REG_ID,
  REG_PW,
  REG_EMAIL,
  REG_IMAGE,
  REG_PH0,
  REG_PH1,
  REG_PH2,
  REG_PHONE,
  REG_NOT_DIGITS,
  WARNING_ID,
  WARNING_PW,
  WARNING_PWRE,
  WARNING_EMAIL,
  WARNING_PHONE,
  idValidator,
  pwValidator,
  rePwValidator,
  emailValidator,
  phoneValidator,
  ph0Validator,
  ph1Validator,
  ph2Validator,
};
