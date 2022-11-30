export interface Player {
  name: string,
  symbol: string  
}

export const player = (name: string, symbol:string) => {
  return {name,symbol}
}

