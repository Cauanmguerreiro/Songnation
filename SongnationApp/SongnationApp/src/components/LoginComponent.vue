<template>
  <div class="login-modal">
    <!-- Header do Modal -->
    <div class="modal-header">
      <h2 class="modal-title">Entrar no Songnation</h2>
    </div>

    <!-- Body do Modal -->
    <div class="modal-body">
      <p class="modal-subtitle">Acesse sua conta para explorar letras e artistas</p>

      <!-- Email Input -->
      <div class="form-group">
        <label for="email">Email</label>
        <q-input
          id="email"
          v-model="email"
          filled
          dense
          placeholder="seu.email@exemplo.com"
          type="email"
          class="form-input"
          input-class="no-transform"
          :rules="[val => val && val.length > 0 || 'Email é obrigatório']"
        >
          <template #prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
      </div>

      <!-- Password Input -->
      <div class="form-group">
        <label for="password">Senha</label>
        <q-input
          id="password"
          v-model="password"
          filled
          dense
          :type="showPassword ? 'text' : 'password'"
          placeholder="Sua senha"
          class="form-input"
          :rules="[val => val && val.length > 0 || 'Senha é obrigatória']"
        >
          <template #prepend>
            <q-icon name="lock" />
          </template>
          <template #append>
            <q-icon
              :name="showPassword ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>
      </div>

      <!-- Remember & Forgot -->
      <div class="form-footer row justify-between items-center q-my-md">
        <q-checkbox
          v-model="rememberMe"
          label="Lembrar-me"
          class="checkbox-label"
        />
        <a href="#" class="forgot-link">Esqueceu a senha?</a>
      </div>

      <!-- Login Button -->
      <q-btn
        label="Entrar"
        color="primary"
        class="login-btn full-width q-mb-md"
        size="lg"
        @click="login"
        :loading="loading"
      />

      <p class="signup-text q-mt-md text-center">
        Não tem conta? <a href="#" class="signup-link">Crie uma agora</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

const emit = defineEmits(['update:modelValue', 'login-success'])

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const login = async () => {
  if (!email.value || !password.value) {
    Notify.create({
      type: 'negative',
      message: 'Preencha todos os campos',
      position: 'top'
    })
    return
  }

  loading.value = true
  try {
    const response = await axios.post('http://localhost:5000/usuarios/login', {
      email: email.value,
      password: password.value
    })

    if (response.status === 200) {
      Notify.create({
        type: 'positive',
        message: 'Login realizado com sucesso!',
        position: 'top'
      })
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token)
      }
      
      emit('login-success', response.data)
      emit('update:modelValue', false)

      // Atualiza a página após o login (pequeno atraso para exibir a notificação/modal fechar)
      setTimeout(() => {
        window.location.reload()
      }, 250)
    }
  } catch (error) {
    let errorMessage = 'Erro ao fazer login'
    
    if (error.response?.status === 401) {
      errorMessage = 'Email ou senha incorretos'
    } else if (error.response?.status === 404) {
      errorMessage = 'Email ou senha incorretos'
    } else if (!error.response) {
      errorMessage = 'Erro de conexão com o servidor'
    }
    
    Notify.create({
      type: 'negative',
      message: errorMessage,
      position: 'top'
    })
    console.error('Erro ao fazer login:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
@import '../css/logincomponent.scss';
</style>