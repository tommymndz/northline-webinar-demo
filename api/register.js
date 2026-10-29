export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        // Capturamos los campos exactos que envía el formulario HTML
        const { fullName, workEmail, companyName } = req.body;

        // Validamos que ninguno esté vacío
        if (!fullName || !workEmail || !companyName) {
            return res.status(400).json({ error: 'Faltan campos obligatorios.' });
        }

        console.log('Nuevo registro recibido en Vercel:', { fullName, workEmail, companyName });

        // Respuesta exitosa al cliente
        return res.status(200).json({
            success: true,
            message: '¡Registro procesado correctamente por el servidor de Node.js!'
        });

    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
}