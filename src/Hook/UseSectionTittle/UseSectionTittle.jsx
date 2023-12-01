 

const UseSectionTittle = ({HeaderTittle,subHeaderTittle}) => {
    return (
        <div className="mt-5 md:mt-5 mb-10 w-1/2 md:w-96 text-center mx-auto">
            <p className="text-orange-400">{HeaderTittle}</p>
           
            <p className="uppercase p-2 text-lg" style={{ borderTop: '3px solid #bbb',borderBottom: '3px solid #bbb'}}>{subHeaderTittle}</p>
        </div>
    );
};

export default UseSectionTittle;