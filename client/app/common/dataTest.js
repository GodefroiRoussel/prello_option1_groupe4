const bo = {
    id: 'bo1',
    titleBoard: 'MyBoard',
    visibilityBoard: 'team',
    backgroundBoard: null,
    seedBoard: null,
    invitationsOpenedBoard: true,
    isDeletedBoard: false,
    isArchivedBoard: false,
    canComment:true,
    seedForGuest:null,
    lists: [
        {
            titleList: 'listeNum1',
            positionList: 1,
            isDeletedList: false,
            isArchivedList: false
        },
        {
            titleList: 'listeNum2',
            positionList: 2,
            isDeletedList: false,
            isArchivedList: false
        }
    ]
};

const boardsTest = [
    {
        id: 'bo1',
        titleBoard: 'MyBoard',
        visibilityBoard: 'team',
        backgroundBoard: null,
        seedBoard: null,
        invitationsOpenedBoard: true,
        isDeletedBoard: false,
        isArchivedBoard: false,
        canComment:true,
        seedForGuest:null,
        lists: [
            {
                titleList: 'listeNum1',
                positionList: 1,
                isDeletedList: false,
                isArchivedList: false
            },
            {
                titleList: 'listeNum2',
                positionList: 2,
                isDeletedList: false,
                isArchivedList: false
            }
        ]
    }
]

const listsTest = [
    {
        id: 'abc',
        titleList: 'MyList1',
        positionList: 1,
        isDeletedList: false,
        isArchivedList: false
    },
    {
        id: 'def',
        titleList: 'MyList2',
        positionList: 2,
        isDeletedList: false,
        isArchivedList: false
    }
]

export default (bo, listsTest, boardsTest);