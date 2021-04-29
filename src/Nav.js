import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className={'nav'}>
            <Link to={'/'}>首页</Link>
            <Link to={'content'}>内容页面</Link>
        </div>
    );
}
