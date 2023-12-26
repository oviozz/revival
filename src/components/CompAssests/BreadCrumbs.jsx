
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">Dashboard</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <span key={name} style={{ display: 'flex', alignItems: 'center' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mx-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ verticalAlign: 'middle' }}
            >
              <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
              />
            </svg>
                        {isLast ? (
                            <span>{name}</span>
                        ) : (
                            <Link to={routeTo}>{name}</Link>
                        )}
          </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
