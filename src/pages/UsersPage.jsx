import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import UserCard from '../components/UserCard';
import gsap from 'gsap';
import LoadingAnimation from '../assets/images/loading-animation.gif'


const UsersPage = () => {
    const { data: users, loading, error } = useFetch('https://fakestoreapi.com/users');

    useEffect(() => {
        gsap.from('.card', { duration: 1, y: 30, opacity: 0, stagger: 0.2 });
    }, [users]);

    if (loading) return <div className='w-[150px] h-[150px] top-0 bottom-0 right-0 left-0 m-auto'>
    <img className='object-cover' src={LoadingAnimation} alt="loading" width={150} height={150}/>
   </div>;
    if (error) return <p className="text-center text-xl text-red-500">{error}</p>;

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {users.map(user => (
                <div className="card" key={user.id}>
                    <UserCard user={user} />
                </div>
            ))}
        </div>
    );
};

export default UsersPage;
