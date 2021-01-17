import { combineReducers } from 'redux';

const booksReducer = () => {
    return [
        {
            "kind": "books#volume",
            "id": "OGC2DwAAQBAJ",
            "etag": "IjMEWEZ2zLQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/OGC2DwAAQBAJ",
            "volumeInfo": {
              "title": "ACT Prep Plus 2021",
              "authors": [
                "Kaplan Test Prep"
              ],
              "publisher": "Simon and Schuster",
              "publishedDate": "2020-06-02",
              "description": "Kaplan’s ACT Prep Plus 2020 has the detailed subject review, practice tests, and expert strategies you need to be prepared for test day. This updated edition includes hundreds of practice questions, online practice tests, and video lessons from our experts to help you face test day with confidence. Kaplan is the official partner for Live Online Prep for the ACT. For more information, visit kaptest.com/onlinepreplive. We are so confident that ACT Prep Plus 2020 offers the guidance you need that we guarantee it. After studying with the book and online resources, you'll score higher on the ACT, or you’ll get your money back. The Best Practice 5 full-length Kaplan practice tests with detailed answer explanations (1 printed in the book and 4 digital tests online) Scoring and analysis for 1 official ACT practice test One-year access to our online center with additional quizzes and videos to help guide your study Kaplan's SmartPoints system helps you earn the most points by guiding you toward the most popular topics and question types on the exam Expert Guidance 9 out of 10 Kaplan students get into one or more of their top choice colleges Get test-like practice questions and study materials crafted by Kaplan’s experts. We invented test prep. Kaplan has been helping students achieve their goals for over 80 years. Learn more at kaptest.com."
            }
          },
          {
            "kind": "books#volume",
            "id": "uW_zzQEACAAJ",
            "etag": "8FP73DNBaQg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/uW_zzQEACAAJ",
            "volumeInfo": {
              "title": "MCAT Physics and Math Review 2022-2023",
              "subtitle": "Online + Book",
              "authors": [
                "Kaplan Test Prep"
              ],
              "publisher": "Kaplan Publishing",
              "publishedDate": "2021-07-06",
              "description": "Kaplan’s MCAT Physics and Math Review 2022–2023 offers an expert study plan, detailed subject review, and hundreds of online and in-book practice questions—all authored by the experts behind the MCAT prep course that has helped more people get into medical school than all other major courses combined. Prepping for the MCAT is a true challenge. Kaplan can be your partner along the way—offering guidance on where to focus your efforts and how to organize your review. This book has been updated to match the AAMC’s guidelines precisely—no more worrying about whether your MCAT review is comprehensive! The Most Practice More than 350 questions in the book and access to even more online—more practice than any other MCAT physics and math book on the market. The Best Practice Comprehensive physics and math subject review is written by top-rated, award-winning Kaplan instructors. Full-color, 3-D illustrations from Scientific American, charts, graphs and diagrams help turn even the most complex science into easy-to-visualize concepts. All material is vetted by editors with advanced science degrees and by a medical doctor. Online resources, including a full-length practice test, help you practice in the same computer-based format you’ll see on Test Day. Expert Guidance High-yield badges throughout the book identify the top 100 topics most tested by the AAMC. We know the test: The Kaplan MCAT team has spent years studying every MCAT-related document available. Kaplan’s expert psychometricians ensure our practice questions and study materials are true to the test."
            }
          },
          {
            "kind": "books#volume",
            "id": "a9_kDwAAQBAJ",
            "etag": "5aeyPxkAUpQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/a9_kDwAAQBAJ",
            "volumeInfo": {
              "title": "SAT Total Prep 2021",
              "subtitle": "5 Practice Tests + Proven Strategies + Online + Video",
              "authors": [
                "Kaplan Test Prep"
              ],
              "publisher": "Kaplan Publishing",
              "publishedDate": "2020-06-02",
              "description": "Rated \"Best of the Best\" in SAT Prep Books by BestReviews, May 2019 SAT Total Prep 2021, Kaplan’s biggest SAT prep book, has more than 1,000 pages of content review, efficient strategies, and realistic practice to help you score higher. This updated edition includes hundreds of new practice questions, new quizzes, and a new layout based on student feedback. The CollegeBoard will resume tests in Fall 2020 and 2021. There are test dates available for October 03, 2020, November 07, 2020, December 05, 2020, March 13, 2021, May 08, 2021, and June 05, 2021. Test centers are able to make individual decisions regarding administering the SAT. The CollegeBoard will contact students via email or text message if the site closes. With SAT Total Prep 2021 you'll have everything you need in one big book, plus one-year access to online resources including a new 250-question Qbank, video lessons, and practice tests to help you master each section of the SAT. The Most Practice Five full-length Kaplan practice tests: two in the book and three online. More than 1,500 practice questions with detailed explanations, including hundreds of brand new questions. Pre-quizzes to help you figure out what you already know and what you can skip. Mixed practice quizzes after every chapter to assess how much you’ve learned. Longer quizzes after every unit to help you cement your understanding. A practice question at the beginning of each lesson to help you quickly identify its focus, and dedicated practice questions after every lesson to test your comprehension. Expert scoring, analysis, and explanations online for two official College Board SAT Practice Tests. Efficient Strategy “On Test Day” strategy notes in every math chapter so you don’t lose sight of the fact that the SAT math test is primarily a strategy test. “Reflect” pages that help you evaluate your comfort level with the topics after completing each chapter and make a plan for improving before the test. Kaplan’s expert strategies for each test section, including special techniques for the optional essay. Online study guidance to help you target your prep no matter how much time you have before the test. Expert Guidance We know the test: Our learning engineers have put tens of thousands of hours into studying the SAT, and we use real data to design the most effective strategies and study plans. Kaplan's books and practice questions are written by veteran teachers who know students—every explanation is written to help you learn. We invented test prep—Kaplan (www.kaptest.com) has been helping students for 80 years, and more than 95% of our students get into their top-choice schools. We're so certain that SAT Total Prep 2021 offers all the guidance you need to excel on the SAT that we guarantee it: After studying with our online resources and book, you'll score higher on the SAT—or you'll get your money back."
            }
        }
    ]
}

const addBookReducer = (book = null, action) => {
    if (action.type = 'ADD_BOOK') {
        return action.payload;
    }
    return book;
}

export default combineReducers({
    booksList: booksReducer,
    addedBook: addBookReducer
})