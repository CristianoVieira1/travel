
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  return /^(?:[12][1-9]9[2-9]|[3-9][1-9][5-9])[0-9]{8}$/.test(phoneNumber);
}

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const isValidCep = (cep: string): boolean => {
  return /^([\d]{2})\.*([\d]{3})-*([\d]{3})/.test(cep);
}

export const isValidDate = (data: string): boolean => {
  return /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(data);
}
