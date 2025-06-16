<div class="container mx-auto px-6 py-4" *ngIf="projects">
  <h1 class="text-2xl font-semibold text-center">Your Projects</h1>
  <div class="flex flex-wrap">
    <div
      *ngFor="let project of projects"
      class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
    >
      <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
        <div class="p-8 text-3xl font-bold text-center border-b-4">{{ project.name }}</div>
        <ul class="w-full text-center text-sm">
          <li class="border-b py-4">
            <strong>Description:</strong> {{ project.description }}
          </li>
          <li class="border-b py-4">
            <strong>Created at:</strong> {{ project.createdAt }}
          </li>
        </ul>
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-start">
          <button
            class="flex items-center justify-start bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6 transform rotate-90"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div *ngIf="!projects">Loading projects...</div>