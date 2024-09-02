import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isRecevierBlocked: false,
  
  changeChat: (chatId, user) =>{
    const currentUser = useUserStore.getState().currentUser;

    // check if current user is blocked
    if(user.blocked.includes(currentUser.id)){
        return set({
            chatId,
            user: null,
            isCurrentUserBlocked: true,
            isRecevierBlocked: false,
        });
    }
    
    // check if receiver is blocked
    else if(currentUser.blocked.includes(user.id)){
        return set({
            chatId,
            user: null,
            isCurrentUserBlocked: false,
            isRecevierBlocked: true,
        });
    }
    else{
        set({
            chatId,
            user,
            isCurrentUserBlocked: false,
            isRecevierBlocked: false,
        });
    }
  },

  changeBlock: () =>{
    set(state=>({...state,isRecevierBlocked: !state.isRecevierBlocked}))
  }
}))
