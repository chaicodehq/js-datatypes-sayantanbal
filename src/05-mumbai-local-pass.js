/**
 * 🚂 Mumbai Local Train Pass Generator
 *
 * Aaj se tu Mumbai local ka digital pass system bana raha hai! Passenger
 * ka data milega aur tujhe ek formatted pass string generate karni hai.
 * Pass mein sab details honi chahiye ek specific format mein.
 *
 * Rules:
 *   - passenger object mein required fields: name, from, to, classType
 *   - classType must be "first" ya "second" (case-insensitive check)
 *   - Pass ID generate karo:
 *     classType ka first char uppercase + from ke pehle 3 letters uppercase
 *     + to ke pehle 3 letters uppercase
 *     Example: "first", "dadar", "andheri" => "F" + "DAD" + "AND" = "FDADAND"
 *   - Output format using template literal:
 *     Line 1: "MUMBAI LOCAL PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Title Case = first letter uppercase, rest lowercase
 *   - Lines are separated by \n (newline)
 *   - Hint: Use template literals, slice(), toUpperCase(), toLowerCase(),
 *     charAt(), typeof
 *
 * Validation:
 *   - Agar passenger object nahi hai ya null hai, return "INVALID PASS"
 *   - Agar koi required field (name, from, to, classType) missing hai
 *     ya empty string hai, return "INVALID PASS"
 *   - Agar classType "first" ya "second" nahi hai, return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string} Formatted pass or "INVALID PASS"
 *
 * @example
 *   generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
 *   // => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
 *
 *   generateLocalPass(null)
 *   // => "INVALID PASS"
 */
export function generateLocalPass(passenger) {
  // Validation
  if (!passenger || typeof passenger !== "object") return "INVALID PASS";

  // Check required fields
  if (typeof passenger.name !== "string" || passenger.name === "")
    return "INVALID PASS";
  if (typeof passenger.from !== "string" || passenger.from === "")
    return "INVALID PASS";
  if (typeof passenger.to !== "string" || passenger.to === "")
    return "INVALID PASS";
  if (typeof passenger.classType !== "string" || passenger.classType === "")
    return "INVALID PASS";

  // Check if classType is valid (case-insensitive)
  const classLower = passenger.classType.toLowerCase();
  if (classLower !== "first" && classLower !== "second") return "INVALID PASS";

  // Generate Pass ID
  const classChar = passenger.classType.charAt(0).toUpperCase();
  const fromCode = passenger.from.slice(0, 3).toUpperCase();
  const toCode = passenger.to.slice(0, 3).toUpperCase();
  const passId = classChar + fromCode + toCode;

  // Format name (uppercase)
  const nameUpper = passenger.name.toUpperCase();

  // Format from and to (Title Case)
  const fromTitle =
    passenger.from.charAt(0).toUpperCase() +
    passenger.from.slice(1).toLowerCase();
  const toTitle =
    passenger.to.charAt(0).toUpperCase() + passenger.to.slice(1).toLowerCase();

  // Format class (uppercase)
  const classUpper = classLower.toUpperCase();

  // Build the pass
  return `MUMBAI LOCAL PASS\n---\nName: ${nameUpper}\nFrom: ${fromTitle}\nTo: ${toTitle}\nClass: ${classUpper}\nPass ID: ${passId}`;
}
