import styles from './Busca.module.css'

function Busca(){
    return (
        <div className={styles.busca}>
            <form>
                <input type="text" className="" name="buscar" placeholder="Buscar..."/>
            </form>
        </div>
    );
}
export default Busca;