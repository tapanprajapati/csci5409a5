/**
 * Jobs820Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  
    getJobs820(req,res){
        Jobs820.find({}).exec((error, jobs) =>
        {
            if(error)
            {
                res.send({
                    code: '500',
                    message: error
                })
            }
            res.view('pages/list-jobs',{jobs:jobs})
        })
    },

    deleteJob820(req,res)
    {
        jobName820 = req.params.jobName820;
        partId820 = req.params.partId820;
        Jobs820.destroy({jobName820: jobName820,partId820:partId820}).exec((error)=>{
            if(error)
            {
                res.send({
                    code: '500',
                    message: error
                })
            }
            res.redirect('/jobs820/getJobs820')
        })
    },

    editJob820(req,res)
    {
        jobName820 = req.params.jobName820;
        partId820 = req.params.partId820;
        Jobs820.findOne({jobName820: jobName820,partId820:partId820}).exec((error, job) =>
        {
            if(error)
            {
                
                res.send({
                    code: '500',
                    message: error
                })
            }
            res.view('pages/edit-job',{job:job})
        })

        return false;
    },

    updateJob820(req,res)
    {
        jobName820 = req.query.jobName820;
        partId820 = parseInt(req.query.partId820);
        qty = parseInt(req.query.qty);


        Jobs820.update({jobName820: jobName820,partId820: partId820},{jobName820: jobName820,partId820: partId820,qty:qty}).exec((error) =>
        {
            if(error)
            {
                res.send({
                    code: '500',
                    message: error
                })
            }
            res.redirect('/jobs820/getJobs820')
        })

    },

    addJob820(req,res)
    {
        jobName820 = req.body.jobName820;
        partId820 = req.body.partId820;
        qty = req.body.qty;


        Jobs820.create({jobName820: jobName820,partId820:partId820,qty:qty}).exec((error) =>
        {
            if(error)
            {
                if(error.code==='E_UNIQUE')
                {
                    res.view('pages/job-exists',{job:req.body})
                }
                else
                {
                    res.send({
                        code: '500',
                        message: error
                    })
                }
            }
            res.redirect('/jobs820/getJobs820')
        })

        return false;
    },

};

