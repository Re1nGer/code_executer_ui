import Layout from "./src/components/Layout.jsx";
import Question from "./src/pages/Question.jsx";
import AddQuestion from "./src/pages/AddQuestion.jsx";
import Product from "@/pages/Product.jsx";
import QuestionPage from "@/pages/QuestionPage.jsx";


const routes = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Product />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/questions/:id',
                element: <Question />
            },
            {
                path: '/addquestion',
                element: <AddQuestion />
            }
        ]
    },
    {
        path: '/questions',
        element: <QuestionPage />
    },
]

export default routes