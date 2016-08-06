import { randomBytes } from 'crypto'

export function bytesToHex (bytes/* : Uint8Array */) /* : string */ {
  return Array.from(bytes).reduce((memo, byte) =>
    memo + (byte & 0xff).toString(16)
  , '')
}

export function strToU8 (str/* : string */) /* : Uint8Array */ {
  const encoder = new window.TextEncoder()
  return encoder.encode(str)
}

export function seed () /* : Uint8Array */ {
  return Uint8Array.from(randomBytes(256))
}

export default function pearson (
  input/* : any */, // Input object/string/Uint8Array
  seed/* : Uint8Array */, // 256-long random Uint8Array
  n/* : number */ = 1 // Length of Pearson hash in bytes
) /* : Uint8Array */ {
  if (typeof input === 'string') {
    input = strToU8(input)
  } else if (input instanceof Uint8Array) {
    // passthrough
  } else {
    input = strToU8(JSON.stringify(input))
  }

  const hash = new Uint8Array(n)
  for (let j = 0; j < n; j += 1) {
    let h = seed[(input[0] + j) % 256]
    for (let i = 1; i < input.length; i += 1) {
      h = seed[(h ^ input[i])]
    }
    hash[j] = h
  }
  return hash
}
