function isMandarinInput(name: string) {
  const mandarin = /^[\u4e00-\u9fa5]+$/g;
  return mandarin.test(name);
}

function getFirstLetter(name: string) {
  const [firstName, lastName] = name.split(' ');
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

function getFullName(firstName: string, lastName: string) {
  const isMandarin = isMandarinInput(`${firstName}${lastName}`);
  if (isMandarin) return `${lastName}${firstName}`;
  return `${firstName} ${lastName}`;
}

export { isMandarinInput, getFirstLetter, getFullName };
