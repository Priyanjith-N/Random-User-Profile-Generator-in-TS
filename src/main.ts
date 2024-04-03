import TemplateList from './templates/TemplateList';

const initAPP = async(): Promise<void> => {
  const UserProfile = TemplateList.instance;

  const generateBtn = document.getElementById('Generate') as HTMLButtonElement;

  generateBtn.addEventListener('click', async (): Promise<void> => {
    try {
      generateBtn.textContent = 'Processing...'
      await UserProfile.getData();
      generateBtn.textContent = 'Generate Another'
    } catch (err: any) {
      console.error(err.message);
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  });

  await UserProfile.getData();
}

document.addEventListener('DOMContentLoaded', initAPP);