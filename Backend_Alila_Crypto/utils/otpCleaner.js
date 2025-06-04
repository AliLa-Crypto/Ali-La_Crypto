import OtpCode from "../models/OtpCode.js";

export const cleanExpiredOtps = async () => {
  try {
    const result = await OtpCode.deleteMany({ expiresAt: { $lt: new Date() } });
    if (result.deletedCount > 0) {
      console.log(`🧹 Pulizia OTP: eliminati ${result.deletedCount} codici scaduti`);
    }
  } catch (err) {
    console.error("❌ Errore nella pulizia dei codici OTP:", err);
  }
};