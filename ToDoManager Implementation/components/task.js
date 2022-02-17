class Task{    
    constructor(id, description, important, privateTask, deadline, project, completers, completed, active) {
        if(id)
            this.id = id;

        this.description = description;
        this.important = important;
        this.private = privateTask;

        if(deadline)
            this.deadline = deadline;
        if(project)
            this.project = project;
          
        
        this.completers = completers || 1;
        this.completed = completed || false;
        this.active = active;

        var selfLink = "/api/tasks/" + this.id;
        this.self =  selfLink;
    }
}

module.exports = Task;


