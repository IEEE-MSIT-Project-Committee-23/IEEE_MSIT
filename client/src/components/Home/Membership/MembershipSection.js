import "./index.css";


const MembershipSection = ({ title, img, description }) => {
    return (
        <div className="relative bg-slate-100 flex flex-col gap-2 p-3 text-xs md:w-44 lg:w-52 text-wrap membership-card ">
            {img && <div className="w-1/2 mx-auto">
                <img src={img} alt={title} />
            </div>}

            {description && <div className="text-center text-base">
                {description}
            </div>}
        </div>
    )
}

export default MembershipSection;