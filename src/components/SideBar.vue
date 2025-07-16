<template>
    <nav id="sidebar" :class="{'open-sidebar': isOpen}">
        <div id="sidebar_content">
            <div id="user">
                <img src="../../public/imagens/logo-user.png" id="logo_user" alt="Logo do Usuário" />
                
                <p id="user_infos">
                    <span class="item-description">
                        Fulano da Silva
                    </span>
                    <span class="item-description">
                        Matricula
                    </span>
                </p>
            </div>


            <ul id="side_items">
                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-swatchbook"></i>
                        <span class="item-description">
                            Biblioteca
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span class="item-description">
                            Calendário Acadêmico
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-book"></i>
                        <span class="item-description">
                            Disciplinas
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-link"></i>
                        <span class="item-description">
                            Links Externos
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-calendar-plus"></i>
                        <span class="item-description">
                            Oferta de Disciplinas
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-folder-open"></i>
                        <span class="item-description">
                            Documentos
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span class="item-description">
                            Solicitações
                        </span>
                    </a>
                </li>

                <li class="side-item">
                    <a href="#">
                        <i class="fa-solid fa-gear"></i>
                        <span class="item-description">
                            Configurações
                        </span>
                    </a>
                </li>
            </ul>

            <button @click="toggleSideBar" id="open_btn">
                <i id="open_btn_icon" class="fa-solid" :class="isOpen ? 'fa-chevron-left' : 'fa-chevron-right'"></i>
            </button>
        </div>

        <div id="logout">
            <button id="logout_btn">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span class="item-description">
                    Logout
                </span>
            </button>
        </div>
    </nav>
</template>

<script setup>
    import {defineProps, defineEmits} from 'vue'

    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['toggle'])

    function toggleSideBar() {
        emit('toggle')  // avisa o pai que o botão foi clicado
    }
</script>


<style>
#sidebar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    height: 100vh;
    border-radius: 0px 18px 18px 0px;
    position: relative;
    transition: all .5s;
    min-width: 82px;
    z-index: 10;
}

#sidebar_content{
    padding: 12px;
}

#user{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    border-bottom: 1px solid #e3e9f7;
    padding: 12px;
}

#logo_user{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
}

#user_infos{
    display: flex;
    flex-direction: column;
}

#user_infos span:last-child{
    color: #6b6b6b;
    font-size: 14px;
}

#side_items{
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    
}

.side-item{
    border-radius: 8px;
    padding: 14px;
    cursor: pointer;
}

.side-item.active{
    background-color: #144575;
}

.side-item:hover:not(.active), #logout_btn:hover{
    background-color: lightgray;
}

.side-item a{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
}

.side-item.active a{
    background-color: #e3e9f7;
}

.side-item a i{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
}

#logout{
    border-top: 1px solid #e3e9f7;
    padding: 12px;
}

#logout_btn{
    border: none;
    padding: 12px;
    font-size: 14px;
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 8px;
    text-align: start;
    cursor: pointer;
    background-color: transparent;
}

#logout_btn i, #logout_btn span{
    color: #ff0000;
}

#open_btn{
    position: absolute;
    top: 30px;
    right: -10px;
    background-color: black;
    color:#e3e9f7;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer; 
}

.item-description{
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    transition: width .6s;
    height: 0px;
}

#sidebar.open-sidebar{
    min-width: 15%;
}

#sidebar.open-sidebar .item-description{
    width: 200px;
    height: auto;
}

#sidebar.open-sidebar .side-item a{
    justify-content: flex-start;
    gap: 14px;
}

</style>