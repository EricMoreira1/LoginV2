function login() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    // Basic validation, you can improve this
    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    } 
    alert('Login realizado com sucesso!'); {
    window.location.href = 'page.html';
} // R
    // Placeholder Java code for handling form submission and authentication
    // This part needs to be implemented on the server-side
    // Example Java code (Servlet):
    /*
    // Assuming you're using Servlets for server-side processing
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Your authentication logic here
        if (isValidUser(email, password)) {
            // Redirect to success page or do something
            response.sendRedirect("success.jsp");
        } else {
            // Redirect to error page or show error message
            response.sendRedirect("error.jsp");
        }
    }

    private boolean isValidUser(String email, String password) {
        // Your authentication logic here
        // Check if the email and password match with the records in your database
        // Return true if authentication succeeds, otherwise false
    }
    
    */
   
}
function cadastrar() {
    var nome = document.getElementById('inputName').value;
    var cpf = document.getElementById('inputcpf').value;
    var email = document.getElementById('inputEmail').value;
    var senha = document.getElementById('inputPassword').value;
    var confirmSenha = document.getElementById('inputConfirmPassword').value;

    // Verifica se todos os campos estão preenchidos
    if (nome === '' || cpf === '' || email === '' || senha === '' || confirmSenha === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (senha !== confirmSenha) {
        alert('A senha e a confirmação de senha não são iguais.');
    } else {
        // Aqui você pode adicionar a lógica para enviar o formulário ou realizar outras ações
        // Por exemplo, você pode enviar os dados para o servidor para processamento
        // Ou redirecionar o usuário para outra página
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'page.html'; // Redireciona para outra página após o cadastro bem-sucedido
    }
}
