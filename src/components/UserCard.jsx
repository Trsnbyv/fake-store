const UserCard = ({ user }) => {
    const fullName = `${user.name.firstname} ${user.name.lastname}`.toUpperCase();

    const avatarUrl = `https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}&background=random&size=128`;

    return (
        <div className="bg-white hover:shadow-2xl duration-300 rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img 
                src={avatarUrl} 
                alt={fullName} 
                className="w-16 h-16 rounded-full object-cover"
            />
            <div>
                <h2 className="text-xl font-semibold">{fullName}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.address.city}, {user.address.street}</p>
            </div>
        </div>
    );
};

export default UserCard;
