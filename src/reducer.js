export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    itme: null,
    //remove after finished developing
    //token: 'BQDNXOxV9S2KZFghZGpGZvQnAn0K_18mbTuzk0ukizmCuUis1yyESILAvqX4tmrljayj6fB41kb0vIFHWPLgzLUZc6-Vwg-SVdTWUlGIGWE4qNf3BDIse2cFbqC8ixAmSnkR4ngF7O3Qxyz1Sb-3r3YXrHzgDpvTGenyEH2-1nspi_R4',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;