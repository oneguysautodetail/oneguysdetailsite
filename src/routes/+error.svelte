<script>
    import { page } from "$app/stores";
</script>

<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <h2>🫤 Uh Oh</h2>
                <p>Looks like something went wrong. You can return to the home page to restart the app.</p>
                <a class="button button-green" href="/">Back Home</a>
                
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <h3>Error</h3>
                <p class="text-gold">{$page.error.message}</p>
            </div>
        </div>
    </div>
</div>