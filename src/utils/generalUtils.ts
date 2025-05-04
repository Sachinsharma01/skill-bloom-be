 const isNullOrUndefined = (value: unknown) => {
    return value === null || value === undefined
 }

 const generateReferralCode = () => {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  
   let result = '';
   for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
 }

 const swapKeyValues = (obj: any) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key]),
    );
};

export { isNullOrUndefined, generateReferralCode, swapKeyValues };
