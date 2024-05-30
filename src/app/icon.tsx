import { ImageResponse } from 'next/og'

// Configuração de rota e metadados da imagem
export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Geração de imagem
export default function Icon() {
  return new ImageResponse(
    (
      // JSX para  imagem
      <div
        style={{
          fontSize: 18,
          background: '#1452b2',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        MS
      </div>
    ),
    // Opções para ImageResponse
    {
      ...size,  // Usa as dimensões definidas anteriorme
    }
  )
}
