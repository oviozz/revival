
import { CircularProgress } from "@mui/joy";

const Loader = ({loadingState}) => {
    return (
        loadingState && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-30"
                 style={{ zIndex: 9999 }}
            >
                <CircularProgress color="primary" size={"lg"} variant={'soft'}/>
            </div>
        )
    );
};

export default Loader;
