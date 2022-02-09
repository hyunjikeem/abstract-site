class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const existedboard = this.boards.find((boardName) => boardName.name === board.name);

        if (!existedboard) {
            board.plusBoard = true;
            this.boards.push(board);
        } else throw new Error();
        // if (this.boards.find((boardName) => boardName.name === board.name))
        // throw new Error();

        // board.plusBoard = true;
        // this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.find((board) => (board.name = name));
    }
}

class Board {
    constructor(name) {
        if (name === null || name === '') throw new Error();

        this.name = name;
        this.articles = [];
        this.plusBoard = false;
    }

    publish(article) {
        if (!this.plusBoard) throw new Error();

        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (subject === (null || '') || content === (null || '') || author === (null || '')) throw new Error();

        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    reply(comment) {
        if (!this.id) throw new Error();

        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (content === (null || '') || author === (null || '')) throw new Error();

        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
