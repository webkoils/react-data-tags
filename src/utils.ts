export const safeStringify = (data: any) => {
  try {
    return JSON.stringify(data)
  } catch (e) {}
  return ''
}
