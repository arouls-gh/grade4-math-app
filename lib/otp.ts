export function generateOTP() {

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  localStorage.setItem("otp_code", otp);
  localStorage.setItem("otp_time", Date.now().toString());

  return otp;
}


export function verifyOTP(input:string) {

  const savedOtp = localStorage.getItem("otp_code");
  const time = localStorage.getItem("otp_time");

  if (!savedOtp || !time) return false;

  const now = Date.now();
  const diff = now - parseInt(time);

  // OTP valid for 5 minutes
  if (diff > 5 * 60 * 1000) {
    return false;
  }

  return input === savedOtp;
}