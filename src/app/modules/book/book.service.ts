import { IBook } from "./book.interface";
import Book,{ bookSchema }  from "./book.model";


export const CreateBookCollectiontoDB = async (payload: IBook): Promise<IBook> => {
    const book = new Book(payload);
    return book;
}

export const getBooksByGenreFromDB = async (payload: string): Promise<IBook | null> => {
    const books = await Book.findOne({ genre: payload })
    return books;
}


export const getBookDataByGenreAndPublicationFromDB = async (): Promise<IBook[]> => {
    const books = await Book.find({genre:'Sci-Fi', "publisher.name":"Roli Books"})
    return books;
}

// fourth problem 

export const retrieveFeaturedBooksFromDB = async (): Promise<void> => {
    bookSchema.statics.updateFeaturedBooks = async function (): Promise<void> {
      try {
        // Update the documents in the database
        const result = await this.updateMany<IBook>({ rating: { $gte: 4 } }, [
          {
            $addFields: {
              feature: {
                $cond: [
                  { $gte: ["$rating", 4.5] },
                  "BestSeller",
                  {
                    $cond: [{ $gte: ["$rating", 4] }, "Popular", null],
                  },
                ],
              },
            },
          },
        ]);
  
        console.log("Book Collection updated successfully");
      } catch (error) {
        console.error("Error to this updating book collection:", error);
      }
    };
  };

//   problem five 

export const updatePublishedBooksFromDB = async (): Promise<void> => {
    try {
      const booksToUpdateIntiger = await Book.find({
        publicationYear: { $gt: 2020 },
        price: { $type: "string" },
      });
  
      const updatedBooks = await Promise.all(
        booksToUpdateIntiger.map(async (book) => {
          book.price = parseInt(book.price as string);
          return await book.save();
        })
      );
  
      console.log(`${updatedBooks.length} books Updated .`);
    } catch (error) {
      console.error(error);
    }
  };