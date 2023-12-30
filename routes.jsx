import Layout from "./src/components/Layout.jsx";
import Question from "./src/pages/Question.jsx";
import AddQuestion from "./src/pages/AddQuestion.jsx";
import Landing from "./src/pages/Landing.jsx";
import Product from "@/pages/Product.jsx";


const routes = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Product />
            },
            {
                path: '/',
                element: <Product />
            },
            {
                path: '/questions',
                element: <Landing />
            },
            {
                path: '/questions/:id',
                element: <Question />
            },
            {
                path: '/addquestion',
                element: <AddQuestion />
            },
        ]
    }
]

export default routes