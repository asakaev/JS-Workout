// If comment 1st console.log then unusual behavor in catch
// If not comment you can't get anything inside catch

(function f(args)  {
   var self=this;
   var k=args.k;
   console.log(k);

   try
   {
       f({k:k+1});
   }
   catch(e)
   {
        // console.log(k);
        // process.stdout.write('k: ' + k);
   }
})({k:0});