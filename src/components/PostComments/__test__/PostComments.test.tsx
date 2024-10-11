import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen } from "@testing-library/react"

import PostComments from '..'

describe('Teste para o componente PostComments', () => {
    test("Deve adicionar dois comentarios corretamente", () => {
        render(<PostComments />)

        // Localiza o textarea para realizar um cometário
        const commentTextarea = screen.getByRole('textbox')

        // Realiza um cometário
        fireEvent.change(commentTextarea, { 
            target: { value: 'Vai Corinthians!' }, 
        })

        // Certifica se o texto foi digitado corretamente
        expect(commentTextarea).toHaveValue("Vai Corinthians!")

        // Verifica o botao para disparar o comentário
        const submitButton = screen.getByRole("button", { name: /comentar/i })

        // Clica no botao para enviar
        fireEvent.click(submitButton)

        // Certifica se o comentário foi adicionado
        expect(screen.getByText("Vai Corinthians!")).toBeInTheDocument()

        // Realiza um novo cometario
        fireEvent.change(commentTextarea, { 
            target: { value: 'Vai Flamengo' }, 
        })

        // Verifica se o texto foi digitado corretamente
        expect(commentTextarea).toHaveValue("Vai Flamengo");

        // Clica novamente no botão de enviar comentário
        fireEvent.click(submitButton);

        // Verifica se o comentario foi adicionado à lista
        expect(screen.getByText("Vai Flamengo")).toBeInTheDocument();

        // Verifica se ambos os comentários estão presentes
        expect(screen.getAllByTestId("post-comment")).toHaveLength(2);
    })
})