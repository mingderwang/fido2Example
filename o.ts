import * as shell from 'shelljs';

function openDefaultBrowser(url: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const command = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
    const result = shell.exec(`${command} ${url}`, { silent: true });

    if (result.code === 0) {
      resolve(0);
    } else {
      reject(new Error(`Failed to open web browser. Exit code: ${result.code}, Error: ${result.stderr}`));
    }
  });
}

// Example usage
const urlToOpen = 'https://html---single-page-qjhoeyvo0djm.runkit.sh/';

openDefaultBrowser(urlToOpen)
  .then((exitCode) => {
    console.log(`Web browser opened successfully with exit code: ${exitCode}`);
  })
  .catch((error) => {
    console.error(`Error opening web browser: ${error.message}`);
  });
