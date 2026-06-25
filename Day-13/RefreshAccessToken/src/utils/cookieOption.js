export const refreshTokenCookieOptions = {
    httpOnly : true,
    secure : false,
    sameSite : "none",
    maxAge : 7*24*60*60*1000
}