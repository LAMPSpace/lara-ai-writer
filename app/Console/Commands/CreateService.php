<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new service';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $folder = 'Services';
        if (!is_dir(app_path($folder))) {                               //If folder doesn't exist, create new folder
            mkdir(app_path($folder));
        }

        $name = $this->argument('name');                                //Name of new file
        $path = app_path($folder . '/' . $name . '.php');               //Location of new file
        if (file_exists($path)) {
            $this->error('Service already exists!');                 //Error message if file already exists.
            return false;
        }

        //There are 2 option: 1 is using stub file, 2 is using variables to contain new file's content
        $stubPath = app_path('Console/Commands/stubs/CoreService.stub');
        $stub = file_get_contents($stubPath);
        $stub = str_replace('{namespace}', $folder, $stub);
        $stub = str_replace('{name}', $name, $stub);

        $repositoryName = $this->ask('What is the repository used for this service?');
        $useRepository = $repositoryName != "" ? "\nuse App\Repositories\\" . $repositoryName . ";" : '';
        $repository = $repositoryName != "" ? $repositoryName . " " : "";
        $stub = str_replace('{repository}', $repository, $stub);
        $stub = str_replace('{useRepository}', $useRepository, $stub);

        file_put_contents($path, $stub);                                //Put contents to the new file with 1st arg is file's path, 2nd arg is file's contents
        $this->info($name . ' is created successfully!');
    }
}
