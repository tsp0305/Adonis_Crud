// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Book from 'App/Models/Book'

export default class BooksController {
    public async index() {
        const books = await Book.all()
        return books

    }
    public async store(ctx) {
        const { author, bookname, status } = ctx.request.body();
        const book = await Book.create({ author, bookname, status })
        return book
    }

    public async show(ctx) {
        try {
            const id = ctx.params.id
            const book = await Book.findOrFail(id)
            return book
        } catch (error) {
            return ctx.response.status(404).json({ message: 'Book not found' })
        }
    }

    public async update(ctx) {
        try {
            const id = ctx.params.id
            const { author, bookname, status } = ctx.request.body()

            const book = await Book.findOrFail(id)
            book.merge({ author, bookname, status })
            await book.save()

            return book
        } catch (error) {
            return ctx.response.status(404).json({ message: 'Book not found ' })
        }
    }

    public async destroy(ctx) {
        try {
            const id = ctx.params.id
            const book = await Book.findOrFail(id)
            await book.delete()

            return { message: 'Book deleted' }
        } catch (error) {
            return ctx.response.status(404).json({ message: 'Book not found' })
        }
    }
}
