import { render, screen } from '@testing-library/react'
import Post from ".."

describe("Teste para o componente Post", () => {
    test("Deve renderizar corretamente a imagem", () => {
        render(<Post imageUrl="https://via.placeholder.com/180x180">Teste</Post>)

        expect(screen.getByText("Teste")).toBeInTheDocument()

        const postImage = screen.getByAltText("Post")
        expect(postImage).toBeInTheDocument()
        expect(postImage).toHaveAttribute("src", "https://via.placeholder.com/180x180")

        expect(screen.getByTestId("post-comments")).toBeInTheDocument()
    }) 
})