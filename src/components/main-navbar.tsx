import ListTaskSection from './list-task-section'
import ProfileUser from './profile-user'
import SearchTask from './search-task'

const MainNavBar = () => {

    return (
        <div className='w-72 hidden sm:flex flex-col p-4 pb-0'>
            <ProfileUser />
            <SearchTask />
            <ListTaskSection />
                {/* <DailyTask /> */}
        </div>
    )
}

export default MainNavBar