

const Bookmark = ({bookmark}) => {
    
    const {Title}=bookmark;
   
    return (
        <div className="bg-white rounded-xl p-3 lg:ml-4 mb-4">
            <h3 className="text-xl">{Title}</h3>
        </div>
    );
};

export default Bookmark;