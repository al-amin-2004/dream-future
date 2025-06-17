

const anotherProfile = async ({ params }) => {

    const { id } = await params;

    return (
        <div className="text-2xl text-primary">
            {id}
        </div>
    )
}

export default anotherProfile;