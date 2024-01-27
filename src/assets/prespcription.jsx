import Navbar from './navbar.jsx';

function Prescription() {
    return (
        <>
            <Navbar />
            <h1>Prescription information</h1>
            <form>
                <label htmlFor="drugname"></label>
                <input type="text" id="drugname" name="drugname" />
                <label htmlFor="startdate"></label>
                <input type="date" id="startdate" name="startdate" />
                <label htmlFor="enddate"></label>
                <input type="date" id="enddate" name="enddate" />
                <label htmlFor="dosagefreq"></label>
                <input type="text" id="dosagefreq" name="dosagefreq" />
                <label htmlFor="dosagecount"></label>
                <input type="text" id="dosagecount" name="dosagecount" />
            </form>
        </>
    )
}

export default Prescription