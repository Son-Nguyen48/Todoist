<template>
  <div class="max-w-5xl mx-auto flex flex-col gap-8 p-6">
    <RouterLink to="/" class="pt-[18px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 32"
        fill="none"
        preserveAspectRatio="xMinYMid slice"
        height="32"
      >
        <rect width="32" height="32" fill="#DE483A" rx="5.12"></rect>
        <path
          fill="#ffffff"
          d="m6.764 14.993 6.374-3.668.008-.005 6.568-3.78c.277-.16.29-.65-.02-.828l-.217-.124c-.317-.18-.727-.414-.902-.516a1.02 1.02 0 0 0-.997.012c-.155.09-10.501 6.038-10.847 6.235a1.349 1.349 0 0 1-1.339 0L-.072 9.144v2.699l.056.032c1.364.795 4.592 2.675 5.382 3.12.479.27.937.264 1.398-.002Z"
        ></path>
        <path
          fill="#ffffff"
          d="m6.764 20.385 6.366-3.664.024-.014 6.56-3.775c.277-.16.29-.651-.02-.828l-.217-.124c-.316-.18-.727-.414-.902-.516a1.02 1.02 0 0 0-.997.012c-.155.089-10.501 6.038-10.847 6.234a1.349 1.349 0 0 1-1.339 0c-.326-.188-5.464-3.174-5.464-3.174v2.698l.056.033c1.365.795 4.592 2.674 5.382 3.12.479.27.937.264 1.398-.002Z"
        ></path>
        <path
          fill="#ffffff"
          d="m13.139 22.108-6.375 3.669c-.461.266-.92.272-1.398.002-.79-.446-4.017-2.325-5.382-3.12l-.056-.033v-2.698l5.464 3.174c.413.239.925.236 1.339 0 .346-.196 10.692-6.145 10.847-6.235a1.02 1.02 0 0 1 .997-.012 125.007 125.007 0 0 0 1.12.64c.31.178.296.669.019.829l-6.575 3.784Z"
        ></path>
        <g>
          <path
            fill="#DE483A"
            d="M55.65 18.73c0 .515.089 1.015.264 1.492.176.481.432.904.774 1.273.342.37.751.664 1.23.884.48.221 1.025.331 1.632.331.608 0 1.152-.11 1.631-.33a3.768 3.768 0 0 0 2.005-2.158c.173-.477.26-.977.26-1.492s-.087-1.015-.26-1.494a3.779 3.779 0 0 0-.774-1.271 3.863 3.863 0 0 0-1.23-.885 3.865 3.865 0 0 0-1.632-.333c-.607 0-1.152.113-1.631.333-.48.221-.889.516-1.23.885a3.74 3.74 0 0 0-.775 1.27c-.175.48-.263.98-.263 1.495Zm-3.316 0c0-1.05.19-2.005.567-2.862a6.665 6.665 0 0 1 1.535-2.198 6.78 6.78 0 0 1 2.293-1.411 8 8 0 0 1 2.821-.497c.995 0 1.935.166 2.82.497a6.81 6.81 0 0 1 2.294 1.41 6.689 6.689 0 0 1 1.535 2.199c.378.857.567 1.811.567 2.862 0 1.05-.19 2.005-.567 2.862a6.688 6.688 0 0 1-1.535 2.198A6.766 6.766 0 0 1 62.37 25.2a7.934 7.934 0 0 1-2.819.497 7.946 7.946 0 0 1-2.821-.497 6.735 6.735 0 0 1-2.293-1.409 6.664 6.664 0 0 1-1.535-2.198c-.378-.857-.567-1.811-.567-2.862ZM71.63 18.734c0 .515.087 1.015.263 1.492.175.481.431.904.773 1.273.342.37.752.664 1.231.884.48.22 1.024.331 1.631.331.608 0 1.152-.11 1.632-.33a3.762 3.762 0 0 0 2.005-2.158 4.35 4.35 0 0 0 .26-1.492c0-.515-.087-1.015-.26-1.494a3.772 3.772 0 0 0-2.005-2.156 3.864 3.864 0 0 0-1.632-.333c-.607 0-1.152.113-1.63.333a3.86 3.86 0 0 0-1.232.885c-.341.369-.598.792-.773 1.27-.176.48-.264.98-.264 1.495Zm7.852 4.644h-.057c-.479.812-1.122 1.402-1.934 1.77a6.292 6.292 0 0 1-2.626.552c-1.033 0-1.949-.178-2.752-.538a6.162 6.162 0 0 1-2.059-1.48 6.311 6.311 0 0 1-1.3-2.212 8.26 8.26 0 0 1-.441-2.736 7.8 7.8 0 0 1 .47-2.738 6.813 6.813 0 0 1 1.312-2.212 6.076 6.076 0 0 1 2.031-1.478c.794-.36 1.66-.54 2.6-.54.627 0 1.18.065 1.66.193.479.13.902.295 1.27.5a4.807 4.807 0 0 1 1.575 1.325h.084V6.473c0-.331.263-.722.724-.722h1.873c.434 0 .722.364.722.722v18.173c0 .462-.391.723-.722.723h-1.705a.732.732 0 0 1-.725-.721v-1.27ZM88.157 18.73c0 .515.088 1.015.264 1.492.175.481.432.904.774 1.273a3.85 3.85 0 0 0 1.23.884c.48.221 1.024.331 1.632.331.607 0 1.152-.11 1.631-.33a3.763 3.763 0 0 0 2.005-2.158c.173-.477.26-.977.26-1.492s-.087-1.015-.26-1.494a3.774 3.774 0 0 0-2.005-2.156 3.866 3.866 0 0 0-1.631-.333c-.608 0-1.153.113-1.632.333-.479.221-.888.516-1.23.885-.342.369-.599.792-.774 1.27-.176.48-.264.98-.264 1.495Zm-3.316 0c0-1.05.189-2.005.567-2.862a6.663 6.663 0 0 1 1.534-2.198 6.78 6.78 0 0 1 2.293-1.411 8 8 0 0 1 2.822-.497c.994 0 1.935.166 2.819.497a6.81 6.81 0 0 1 2.295 1.41 6.689 6.689 0 0 1 1.534 2.199c.378.857.568 1.811.568 2.862 0 1.05-.19 2.005-.567 2.862a6.688 6.688 0 0 1-1.535 2.198 6.766 6.766 0 0 1-2.295 1.409 7.934 7.934 0 0 1-2.82.497 7.946 7.946 0 0 1-2.82-.497 6.736 6.736 0 0 1-2.294-1.409 6.662 6.662 0 0 1-1.534-2.198c-.378-.857-.567-1.811-.567-2.862ZM100.945 7.588c0-.535.198-.999.594-1.398.398-.395.9-.594 1.507-.594.608 0 1.121.19 1.535.568.414.378.623.852.623 1.424a1.85 1.85 0 0 1-.623 1.424c-.414.378-.927.567-1.535.567-.607 0-1.109-.198-1.507-.596-.396-.396-.594-.86-.594-1.395ZM114.64 15.77c-.331 0-.575-.25-.616-.359-.276-.723-1.155-.994-1.865-.994-1.119 0-1.997.519-1.997 1.41 0 .863.85 1.04 1.375 1.199.576.174 1.677.414 2.284.557a7.419 7.419 0 0 1 1.728.636c1.761.915 2.012 2.354 2.012 3.22 0 3.197-3.167 4.257-5.366 4.257-1.695 0-4.879-.257-5.578-3.488-.068-.315.21-.798.721-.798h1.832c.36 0 .603.263.674.47.235.649.983 1.14 2.245 1.14 1.353 0 2.153-.537 2.153-1.251 0-.462-.261-.872-.603-1.104-1.026-.696-3.564-.774-4.942-1.508-.528-.28-1.852-.922-1.852-3.109 0-3.015 2.741-4.286 5.149-4.286 3.551 0 4.854 2.243 5.001 3.075.081.459-.176.934-.692.934h-1.663ZM117.833 14.129v-1.373c0-.327.258-.721.717-.721h1.769v-3.37c0-.36.244-.58.429-.66l1.89-.825c.552-.227.999.228.999.666v4.189h2.928c.453 0 .722.395.722.721v1.375a.745.745 0 0 1-.721.723h-2.929v5.808c0 .663-.018 1.182.235 1.565.233.351.574.482 1.257.482.196 0 .371-.033.519-.083a.706.706 0 0 1 .868.317c.216.418.463.877.636 1.206.191.361.037.825-.311.993-.561.273-1.339.494-2.406.494-.884 0-1.385-.096-1.945-.29a3.347 3.347 0 0 1-1.417-1c-.324-.396-.484-.926-.604-1.516-.122-.59-.15-1.304-.15-2.08v-5.896h-1.765c-.463 0-.721-.4-.721-.725ZM41.928 14.129v-1.373c0-.327.259-.721.717-.721h2.021v-3.37c0-.36.245-.58.43-.66l1.89-.825c.552-.227.999.228.999.666v4.189h2.928c.452 0 .722.395.722.721v1.375a.745.745 0 0 1-.722.723h-2.928v5.808c0 .663-.018 1.182.235 1.565.232.351.573.482 1.257.482.196 0 .37-.033.519-.083a.706.706 0 0 1 .867.317c.217.418.464.877.637 1.206.19.361.037.825-.311.993-.562.273-1.34.494-2.406.494-.884 0-1.385-.096-1.945-.29a3.351 3.351 0 0 1-1.418-1c-.324-.396-.484-.926-.603-1.516-.122-.59-.15-1.304-.15-2.08v-5.896H42.65c-.463 0-.722-.4-.722-.725ZM102.115 25.37h1.876a.723.723 0 0 0 .721-.723v-11.89a.723.723 0 0 0-.721-.722h-1.876a.724.724 0 0 0-.721.722v11.89c0 .398.325.722.721.722Z"
          ></path>
        </g>
      </svg>
    </RouterLink>
    <div class="flex gap-5">
      <div class="w-1/2 flex gap-4 flex-col">
        <h1 class="text-[32px] font-bold">Login</h1>
        <div class="h-2"></div>
        <ul class="flex flex-col gap-3">
          <li
            class="flex px-7 border-[1px] py-3 justify-center gap-2 items-center rounded-xl hover:bg-gray-200 cursor-pointer transition ease-linear duration-300"
          >
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                class="MfSWZ05"
                aria-hidden="true"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                    fill="#EA4335"
                  ></path>
                  <path d="M0 0h18v18H0z"></path>
                </g>
              </svg>
            </div>
            <a class="text-[18px] font-bold" href="#">Continue with Google</a>
          </li>
          <li
            class="flex px-7 border-[1px] py-3 justify-center gap-2 items-center rounded-xl hover:bg-gray-200 cursor-pointer transition ease-linear duration-300"
          >
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="MfSWZ05"
                aria-hidden="true"
              >
                <mask
                  id="facebook-icon_svg__a"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                  style="mask-type: alpha"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M.001 0H18v17.89H.001V0z"
                    fill="#fff"
                  ></path>
                </mask>
                <g mask="url(#facebook-icon_svg__a)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 9a9 9 0 10-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.602h-2.097v6.289C14.71 17.216 18 13.492 18 9z"
                    fill="#1877F2"
                  ></path>
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.503 11.602l.4-2.602h-2.497V7.312c0-.712.349-1.406 1.467-1.406h1.135V3.691s-1.03-.175-2.015-.175c-2.056 0-3.4 1.246-3.4 3.501V9H5.31v2.602h2.285v6.289a9.067 9.067 0 002.812 0V11.6h2.097z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <a class="text-[18px] font-bold" href="#">Continue with Facebook</a>
          </li>
          <li
            class="flex px-7 border-[1px] py-3 justify-center gap-2 items-center rounded-xl hover:bg-gray-200 cursor-pointer transition ease-linear duration-300"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 256 315"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                class="MfSWZ05"
                aria-hidden="true"
              >
                <path
                  d="M214 167c0 48 42 63 42 64s-7 22-22 44c-13 20-26 39-48 39-21 0-28-12-52-12s-31 12-51 12c-21 1-37-20-50-39-27-39-48-111-20-159 14-24 39-39 65-39 21-1 40 13 52 13s36-16 60-14c11 0 39 4 58 31-2 1-35 20-34 60M174 50c11-13 19-32 17-50-16 1-35 11-47 24a66 66 0 00-16 48c17 2 35-9 46-22"
                ></path>
              </svg>
            </div>
            <a class="text-[18px] font-bold" href="#">Continue with Apple</a>
          </li>
          <hr />
          <form class="flex flex-col gap-4">
            <div class="p-3 flex flex-col gap-2 border-[1px] rounded-xl">
              <label for="email">E-mail</label>
              <input
                name="email"
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your email address.."
                class="focus-visible:outline-none"
              />
            </div>
            <div class="p-3 flex flex-col gap-2 border-[1px] rounded-xl relative">
              <label for="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                v-model="password"
                placeholder="Enter your password.."
                class="focus-visible:outline-none"
              />
              <button class="absolute right-0 bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true">
                  <g fill="gray" fill-rule="evenodd" transform="translate(2 4)">
                    <path
                      fill-rule="nonzero"
                      d="M13.047 2.888C11.962 2.294 10.944 2 10 2 7.56 2 4.63 3.966 1.288 8c1.133 1.368 2.218 2.497 3.253 3.394l-.708.708c-1.068-.93-2.173-2.085-3.315-3.464a1 1 0 0 1 0-1.276C4.031 3.121 7.192 1 10 1c1.196 0 2.456.385 3.78 1.154l-.733.734zm-6.02 10.263C8.084 13.72 9.076 14 10 14c2.443 0 5.373-1.969 8.712-6-1.11-1.34-2.176-2.453-3.193-3.341l.708-.709C17.437 5.013 18.695 6.363 20 8c-3.721 4.667-7.054 7-10 7-1.175 0-2.411-.371-3.709-1.113l.735-.736z"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      d="M8.478 11.7l.79-.79a3 3 0 0 0 3.642-3.642l.79-.79A4 4 0 0 1 8.477 11.7zM6.334 9.602a4 4 0 0 1 5.268-5.268l-.78.78A3.002 3.002 0 0 0 7.113 8.82l-.78.78z"
                    ></path>
                    <rect
                      width="21"
                      height="1"
                      x="-.722"
                      y="7.778"
                      rx=".5"
                      transform="rotate(-45 9.778 8.278)"
                    ></rect>
                  </g>
                </svg>
              </button>
            </div>

            <button
              @click.prevent="login(formData)"
              class="py-3 px-6 bg-[#DE483A] rounded-xl text-center hover:bg-[#af4238] cursor-pointer transition ease-linear duration-300"
            >
              <input
                class="text-white text-[18px] font-bold cursor-pointer"
                type="submit"
                value="Connection"
              />
            </button>

            <p class="text-center">
              <a class="underline mb-4 inline-block" href="#">Forgot your password ?</a>
              <br />
              By continuing with Google, Apple or an email address, you agree to the
              <a class="underline" href="#">Terms and conditions</a> and the
              <a class="underline" href="#">Privacy Policy</a> by Todoist.
            </p>
            <hr />
            <p class="text-center">
              You do not have an account ?
              <RouterLink class="underline" to="/register">Subscribe</RouterLink>
            </p>
          </form>
        </ul>
      </div>
      <div class="w-1/2 relative">
        <video autoplay muted>
          <source
            src="https://todoist.b-cdn.net/assets/video/d1cc9a7bd4e95120022d9a2d66d14fbe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p
          class="absolute p-6 border-[1px] rounded-xl w-96 h-56 text-[18px] font-normal bottom-36 -right-36"
        >
          Before Todoist, my to-do lists were scattered all around! Now, everything is in order and
          in one place.
          <br />
          <span class="inline-block mt-5">– Matt M.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const email = ref([])
const password = ref([])
const formData = computed(() => {
  return {
    email: email.value,
    password: password.value
  }
})
const router = useRouter()

const login = (formData) => {
  axios
    .post('http://localhost:3000/api/login/', formData)
    .then((res) => {
      console.log(res)
      router.push('/app/project/1')
    })
    .catch((e) => console.log(e))
}
</script>
