export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { fullName, email, company } = req.body;

    if (!fullName || !email || !company) {
      return res.status(400).json({ error: 'Faltan campos obligatorios.' });
    }

    console.log('Nuevo registro recibido en Vercel:', { fullName, email, company });

    return res.status(200).json({ 
      success: true, 
      message: '¡Registro procesado correctamente por el servidor de Node.js!' 
    });

  } catch (error) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}