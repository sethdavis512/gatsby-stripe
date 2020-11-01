export const getUniqueId = (prefix) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
