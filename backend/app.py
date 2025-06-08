from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

# Configuração do email
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER', 'victororg22@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASSWORD', '')  # Configurar via variável de ambiente
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('EMAIL_USER', 'victororg22@gmail.com')

mail = Mail(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        
        if not all(key in data for key in ['name', 'email', 'subject', 'message']):
            return jsonify({'error': 'Dados incompletos'}), 400
        
        # Criar o corpo do email
        email_body = f"""
        Nome: {data['name']}
        Email: {data['email']}
        Assunto: {data['subject']}
        
        Mensagem:
        {data['message']}
        """
        
        # Enviar o email
        msg = Message(
            subject=f"Contato do Portfólio: {data['subject']}",
            recipients=['victororg22@gmail.com'],  # Email para onde as mensagens serão enviadas
            body=email_body,
            reply_to=data['email']
        )
        
        mail.send(msg)
        
        return jsonify({'success': True, 'message': 'Email enviado com sucesso!'}), 200
    
    except Exception as e:
        print(f"Erro ao enviar email: {str(e)}")
        return jsonify({'error': 'Erro ao enviar email', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 