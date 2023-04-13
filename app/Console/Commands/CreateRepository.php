<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateRepository extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new repository';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $folder = 'Repositories';
        if (!is_dir(app_path($folder))) {                               //If folder doesn't exist, create new folder
            mkdir(app_path($folder));
        }

        $name = $this->argument('name');                                //Name of new file
        $path = app_path($folder . '/' . $name . '.php');               //Location of new file
        if (file_exists($path)) {
            $this->error('Repository already exists!');                 //Error message if file already exists.
            return false;
        }

        //There are 2 option: 1 is using stub file, 2 is using variables to contain new file's content
        $stubPath = app_path('Console/Commands/stubs/CoreRepository.stub');
        $stub = file_get_contents($stubPath);
        $stub = str_replace('{namespace}', $folder, $stub);
        $stub = str_replace('{name}', $name, $stub);

        $modelName = $this->ask('What is the model used for this repository?');
        $useModel = $modelName != "" ? "\nuse App\Models\\" . $modelName . ";" : '';
        $model = $modelName != "" ? $modelName . " " : "";
        $stub = str_replace('{model}', $model, $stub);
        $stub = str_replace('{useModel}', $useModel, $stub);

        $abstractClassName = $this->ask('What is the abstract class used for this repository?');
        $useExtend = $abstractClassName != "" ? "\nuse App\\" . $folder . "\\" . $abstractClassName . ';' : "";
        $extends = $abstractClassName != "" ? "extends " . $abstractClassName : "";
        $stub = str_replace('{extends}', $extends, $stub);
        $stub = str_replace('{useExtend}', $useExtend, $stub);

        $interfaceClassName = $this->ask('What is the interface class used for this repository?');
        $useImplement = $interfaceClassName != "" ? "\nuse App\\Interfaces" . "\\" . $interfaceClassName . ';' : "";
        $implements = $interfaceClassName != "" ? "implements " . $interfaceClassName : "";
        $stub = str_replace('{implements}', $implements, $stub);
        $stub = str_replace('{useImplement}', $useImplement, $stub);

        file_put_contents($path, $stub);                                //Put contents to the new file with 1st arg is file's path, 2nd arg is file's contents
        $this->info($name . ' is created successfully!');
    }
}
