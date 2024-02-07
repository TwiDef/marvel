import Hemlet from 'react-helmet';

import Comics from './../comics/Comics';
import Banner from './../banner/Banner';

const ComicsPage = () => {

    return (
        <>
            <Hemlet>
                <meta
                    name="description"
                    content="Page with comics" />
                <title>Comics page</title>
            </Hemlet>

            <Banner />
            <Comics />
        </>
    )
}

export default ComicsPage;